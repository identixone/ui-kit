import React from "react";
import PropTypes from "prop-types";

import PageFiltersListTitle from "./PageFiltersListTitle";
import StyledPageFiltersList from "./StyledPageFiltersList";
import PageFiltersListInner from "./PageFiltersListInner";

import PageFiltersListContentTop from "./PageFiltersListContentTop";
import PageFiltersListActions from "./PageFiltersListActions";
import PageFiltersListSearch from "./PageFiltersListSearch";

import PageFiltersListButtons from "./PageFiltersListButtons";
import EmptyListNotice from "./EmptyListNotice";

import List from "./List";
import Content from "./Content";

import PageFiltersListDynamicList from "./PageFiltersListDynamicList";

import PageFiltersListContext from "./PageFiltersListContext";

import { isEqual, debounce, noop } from "lodash-es";

import { withListDirectoryList } from "./ListDirectoryContext";

class PageFiltersListComponent extends React.Component {
  static propTypes = {
    list: PropTypes.func,
    listCount: PropTypes.number,
    title: PropTypes.string,
    onCreate: PropTypes.func,
    buttons: PropTypes.func,
    fetchList: PropTypes.func.isRequired,
    isListFetching: PropTypes.bool.isRequired,
    actions: PropTypes.node,
    searchQuery: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    setSearchQuery: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onSearch: noop,
  };

  listRef = React.createRef();

  setSearchQuery = searchQuery => {
    this.setState({ searchQuery, isSearching: true }, () => {
      this.props.onSearch(this.state.searchQuery);
    });
  };

  setFilters = filters => {
    this.setState({ filters });
  };

  setPagination = newPagination => {
    this.setState(({ pagination }) => ({
      pagination: { ...pagination, ...newPagination },
    }));
  };

  resetPagination = hasToRefetch => {
    if (this.state.pagination.offset === 0 && hasToRefetch) {
      this.props.fetchList(this.state.fetchParams);
    }

    this.setState(({ pagination }) => ({
      pagination: {
        ...pagination,
        offset: 0,
      },
    }));
  };

  fetchList = (reset = false) => {
    const { searchQuery, pagination } = this.state;

    const newFetchParams = {
      q: searchQuery,
      limit: pagination.limit,
      offset: pagination.offset,
      meta: {
        clearList: true,
      },
    };

    if (reset || !isEqual(newFetchParams, this.state.fetchParams)) {
      this.setState({ fetchParams: newFetchParams }, () => {
        this.props.fetchList(this.state.fetchParams);
      });
    }
  };

  searchItems = debounce(this.fetchList, 500);

  componentDidMount() {
    this.fetchList();
  }

  handleClick = e => {
    this.props.onCreate(e);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.searchItems();

      setTimeout(() => this.resetPagination(false), 500);
    }

    if (prevState.isSearching && !this.state.isSearching) {
      this.props.setSearchQuery(this.state.searchQuery);
    }

    if (prevProps.isListFetching && !this.props.isListFetching) {
      if (this.listRef.current) {
        this.listRef.current.scrollTop = 0;
      }

      this.setState({ isSearching: false });
    }

    if (
      prevState.searchQuery === this.state.searchQuery &&
      prevState.pagination.offset !== this.state.pagination.offset
    ) {
      this.fetchList();
    }
  }

  state = {
    searchQuery: this.props.searchQuery,
    isSearching: false,
    filters: {},
    pagination: {
      limit: 10,
      offset: 0,
    },
    fetchParams: {},
    setSearchQuery: this.setSearchQuery,
    setFilters: this.setFilters,
    setPagination: this.setPagination,
    resetPagination: this.resetPagination,
    fetchList: this.fetchList,
  };

  render() {
    const {
      list,
      buttons,
      title,
      listCount,
      isListFetching,
      actions,
      placeholder,
    } = this.props;
    const { searchQuery, isSearching } = this.state;

    const hasNoItems = listCount === 0 && !isSearching && searchQuery === "";

    return (
      <PageFiltersListContext.Provider value={this.state}>
        {!hasNoItems && (
          <StyledPageFiltersList>
            <PageFiltersListInner>
              <List>{list({ listRef: this.listRef })}</List>
              <Content>
                <PageFiltersListContentTop>
                  <PageFiltersListTitle>{title}</PageFiltersListTitle>
                  <PageFiltersListButtons>
                    {buttons({ fetchList: this.fetchList })}
                  </PageFiltersListButtons>
                </PageFiltersListContentTop>
                <PageFiltersListSearch
                  placeholder={placeholder}
                  data-testid="persons-lists-search"
                />
                {actions && (
                  <PageFiltersListActions>{actions}</PageFiltersListActions>
                )}
              </Content>
            </PageFiltersListInner>
          </StyledPageFiltersList>
        )}
        {hasNoItems && !isListFetching && (
          <EmptyListNotice title={title} handleClick={this.handleClick} />
        )}
      </PageFiltersListContext.Provider>
    );
  }
}

const PageFiltersList = withListDirectoryList(PageFiltersListComponent);

export { PageFiltersList, PageFiltersListDynamicList, PageFiltersListButtons };
