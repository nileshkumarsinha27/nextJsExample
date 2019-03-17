import ListItem from '../listItem/ListItem';
const List = props => {
  const getListElems = (elem, index) => (
    <ListItem
      elem={elem}
      key={index}
      index={index}
      fromArticles={props.fromArticles}
    />
  );
  return (
    <div className="listcontainer">
      <ul>
        {props.resultList &&
          props.resultList.map((elem, index) => getListElems(elem, index))}
      </ul>
      <style jsx>
        {`
          .listcontainer {
            display: inline-block;
            width: 100%;
          }
          ul {
            width: inherit;
            list-style: none;
          }
        `}
      </style>
    </div>
  );
};
export default List;
