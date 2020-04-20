import { hasProperty } from "../../../utils/helpers";

const getShortId = (id) => id.split("-")[4];

function useLocalId(props) {
  const { id, children } = props;
  const hasIdInProps = hasProperty(props, "id");
  const localId = hasIdInProps ? id : children;

  return { localId, shortLocalId: getShortId(localId) };
}

export { useLocalId };
