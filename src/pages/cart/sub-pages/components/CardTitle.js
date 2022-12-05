import React from 'react';
import deleteIcon from './../../../../icon/delete.svg';
import Swal from 'sweetalert2';
function CardTitle({ text, deleteFun }) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });
  return (
    <div className="d-flex justify-content-between ">
      <h2>{text}</h2>
      <span
        className="icon"
        role="button"
        onClick={() => {
          swalWithBootstrapButtons
            .fire({
              title: '確定要移除商品嗎？',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: ' 確定，請幫我移出購物車',
              cancelButtonText: '不，我再考慮一下',
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  '移除成功',
                  '商品已從購物車內移除',
                  'success'
                );
                deleteFun();
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  '取消',
                  '您的商品並未移除',
                  'error'
                );
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
