export const config = {
  mode: "normal",
  set: {
    normal: {
      view: {
        new: true,
        exact: true,
        ha: false,
        junk: true,
        junksi: false, // only for interface, show/hide initial photo
        nm: true,
        det: true,
        limit: 20, // limit of entrys for one page
        offset: 0, // # of entrys page started
        current_page: 0, // current page number
        scrollPosition: 0, // variable to store scroll position for switch back to entrys mode
      },
      sources: {
        list: [{ name: "Loading...", value: "" }], // current list of sources
        current: "",
      },
    },
    id: {
      view: {
        idxid: null,
        new: true,
        exact: true,
        ha: false,
        junk: true,
        limit: 20, // limit of entrys for one page
        offset: 0, // # of entries page started
        current_page: 0, // current page number
      },
      sources: {
        list: [{ name: "Loading...", value: "" }], // current list of sources
        current: "",
      },
    },
  },
  entryType: {
    new: { short: "New", scshort: "new", full: "New person" },
    reinit: { short: "Reinit", scshort: "reinit", full: "Reinitialised" },
    exact: { short: "Exact", scshort: "exact", full: "Exact" },
    ha: { short: "HA", scshort: "HA", full: "High accuracy" },
    junk: { short: "Junk", scshort: "junk", full: "Junk result" },
    nm: { short: "NM", scshort: "NM", full: "No matches" },
    det: { short: "Det", scshort: "det", full: "Detection only" },
  },
  sex: { 0: "male", 1: "female" },
  initSource: { name: "All sources", value: "all" }, // initial name for 'All sources' selection

  // Flags
  pgntUpdateFlag: 0, // flag for jump to page
  timeouts: [], // for NProgress bar
  photo: "", // store photo from form
  options: {}, // store settings for upload
  dt: {
    instance: null,
    mode: 0, // dt form state, 0 - no filter by dt, 1 - filter on
    date_from: 0,
    date_to: 0,
  },
  phup: 0, // photo upload form state
  phupmode: "Search", // photo upload form mode
  phuptimeouts: [], // for phup statuses
};
