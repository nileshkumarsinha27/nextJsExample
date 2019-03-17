import ArticleDetails from '../articleDetails/ArticleDetails';
import BookDetails from '../bookDetails/BookDetails';
const ListItem = props => (
  <li key={props.index} className="list-item">
    {props.fromArticles ? (
      <ArticleDetails data={props.elem} index={props.index} />
    ) : (
      <BookDetails data={props.elem} index={props.index} />
    )}
    <style jsx>
      {`
        .list-item {
          display: inline-grid;
          display: -webkit-inline-grid;
          display: -moz-inline-grid;
          display: -ms-inline-grid;
          display: -o-inline-grid;
          width: 29%;
          border: 1px solid #dbdfe3;
          padding: 2%;
          border-radius: 5px;
          box-shadow: 0 0 31px 0 rgba(0, 0, 0, 0.12);
          height: auto;
          margin: 2%;
          background: #fff;
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .list-item {
            width: 46%;
          }
        }
        @media (min-width: 320px) and (max-width: 479px) {
          .list-item {
            width: 96%;
          }
        }
      `}
    </style>
  </li>
);
export default ListItem;
