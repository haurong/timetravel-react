import React from 'react';
import deleteIcon from './../../../../icon/delete.svg';
import Swal from 'sweetalert2';
function CardTitle({ text, deleteFun }) {
  return (
    <div className="d-flex justify-content-between ">
      <h2>{text}</h2>
      <span
        className="icon"
        role="button"
        onClick={() => {
          Swal.fire({
            title: '確定要移除商品嗎？',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: ' 確定，請幫我移出購物車',
            confirmButtonColor: '#59d8a1',
            cancelButtonText: '不，我再考慮一下',
            cancelButtonColor: '#D9D9D9',
            reverseButtons: true,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('移除成功', '商品已從購物車內移除', 'success');
              deleteFun();
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              Swal.fire('取消', '您的商品並未移除', 'error');
              return;
            }
          });
        }}
      >
        <img alt="delete-icon" src={deleteIcon} />
      </span>
    </div>
  );
}

export default CardTitle;
