export default function SiteCardList({ rows }) {
  // console.log({ rows });
  return (
    <>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row">
          {rows.map((el) => {
            return (
              <div
                className="card col-3"
                key={el.sid}
                style={{ width: '285px' }}
              >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{el.name}</h4>
                  <h5>{el.site_category_name}</h5>
                  <p className="card-text">
                    {el.city_name}
                    {el.area_name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
