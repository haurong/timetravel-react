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
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{el.name}</h5>
                  <p class="card-text">{el.area_sid}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
