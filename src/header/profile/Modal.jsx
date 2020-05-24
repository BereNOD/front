import React from 'react';
import ReactDOM from 'react-dom';
import Cross_icon from "./Cross.svg";
import './modalProfile.sass';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal_overlay"/>
    <div className="modal_wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal_header">
         <div className="Logofinal">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M58.4021 50.1422C58.4021 66.1267 45.3283 79.0848 29.201 79.0848C13.0737 79.0848 0 66.1267 0 50.1422V33.8848H58.4021V50.1422Z" fill="#68D6F4"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M42.6383 50.1428C43.3823 42.8523 41.1644 34.2749 38.8693 29.1897C38.8693 29.1897 60.3955 10.4071 50.1833 4.75842C39.9712 -0.890272 30.5242 23.6523 30.5242 23.6523H27.0148C27.0148 23.6523 17.5467 -0.87636 7.36266 4.75842C-2.82138 10.3932 18.6767 29.2176 18.6767 29.2176C16.3886 34.3028 14.1637 42.8802 14.9147 50.1706L42.6383 50.1428Z" fill="white"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2048 39.1162C35.3478 39.1201 40.3249 44.0583 40.3223 50.1469C40.3197 56.2356 35.3384 61.1697 29.1954 61.1684C23.0524 61.1671 18.0732 56.2309 18.0732 50.1423C18.0771 44.0516 23.0597 39.1162 29.2048 39.1162Z" fill="white"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9169 34.4069C27.5582 34.422 28.0713 34.9397 28.0749 35.5756V41.1408C28.1032 41.4585 27.988 41.7723 27.7605 41.9979C27.533 42.2234 27.2164 42.3375 26.8958 42.3095C26.2462 42.3057 25.7205 41.7847 25.7167 41.1408V35.5756C25.7205 34.9317 26.2462 34.4107 26.8958 34.4069H26.9169ZM46.1479 50.1426C46.1479 50.3281 46.1479 50.5136 46.1479 50.6991C45.8596 59.7489 38.3681 66.9337 29.233 66.9217C24.7392 66.9298 20.4274 65.1623 17.2522   62.0104C14.2218 59 12.4645 54.9568 12.3392 50.706H12.283V50.6295C12.283 49.4956 12.283 48.3408 12.283 47.193C12.283 46.0452 12.4164 44.8695 12.5287 43.7147C12.967 39.0419 13.8506 34.4207 15.1677 29.913C12.1567 27.0817 5.58022 20.3478 3.30618 14.1843C2.27798 11.6419 2.27546 8.805 3.29916 6.26082C3.99169 4.63684 5.14805 3.24891 6.62599 2.26778C8.09702 1.29504 9.81365 0.750384 11.5811 0.695606C14.4334 0.638487 17.1982 1.67236 19.3016 3.58256C23.8918 7.54778 27.4503 14.8521 29.1979   18.9495C30.9456 14.8521 34.511 7.54778 39.1012 3.58256C41.1926 1.68467 43.9373 0.651742 46.7726 0.695606C48.5394 0.748315 50.256 1.29054 51.7277 2.26082C53.2067 3.24382 54.3632 4.63429 55.0546 6.26082C56.0768 8.80001 56.0768 11.6312 55.0546 14.1704C52.7805 20.3478 46.2041 27.0747 43.1861 29.913L43.3615 30.5043C43.6633 31.5339 43.923 32.4939 44.1336 33.3634C45.4729 38.846 46.1514 44.4668 46.1549 50.1078L46.1479 50.1426ZM18.4875 50.1426H18.5436C18.5446 52.9408 19.6683 55.6237 21.6669   57.6C23.6594 59.589 26.37 60.7082 29.1979 60.7095C35.0769 60.6942 39.8399 55.9764 39.8592 50.1495C39.8614 44.9934 39.2417 39.8555 38.0133 34.8452C37.7607 33.8017 37.5267 32.946 37.3115 32.2782C37.1149 31.5826 36.8763 30.8869 36.6096 30.1287V30.0869L35.9077 28.1113L37.515 26.72C37.515 26.72 46.7164 18.6573 49.1308 12.0626C49.6017 10.9942 49.6468 9.78869 49.2572 8.68865C49.044 8.17833 48.6824 7.74243 48.2184 7.43648C47.7255 7.11525 47.1518 6.93695 46.562 6.92169C45.3087 6.93006 44.106   7.41285 43.2001 8.27126C37.901 12.8904 33.9285 23.993 33.9144 24.0208L33.1705 26.1078H25.1833L24.4393 24.0208C24.4393 24.0208 20.4878 12.8904 15.1466 8.27126C14.2407 7.41285 13.038 6.93006 11.7847 6.92169C11.1949 6.93695 10.6212 7.11525 10.1283 7.43648C9.66433 7.74243 9.30273 8.17833 9.08953 8.68865C8.6999 9.78869 8.74504 10.9942 9.21587 12.0626C11.6443 18.6573 20.8177 26.6713 20.8457 26.6713L22.453 28.0626L21.7511 30.0521C20.2027 34.667 19.1925 39.4425 18.7402 44.2852C18.6419 45.3356   18.5647 46.3721 18.5226 47.4365C18.4875 48.3686 18.4734 49.273 18.4875 50.1495V50.1426ZM24.334 49.9895C24.6779 51.4921 25.9272 52.9252 27.5836 54.1634C29.24 55.4017 29.3243 55.3182 30.9736 54.0521C32.623 52.786 33.739 51.4434 34.0689 49.9826C35.0023 45.913 23.4005 45.913 24.334 49.9826V49.9895ZM31.6334 34.4069C32.283 34.4107 32.8087 34.9317 32.8125 35.5756V41.1408C32.8407 41.4585 32.7256 41.7723 32.4981 41.9979C32.2705 42.2234 31.9539 42.3375 31.6334 42.3095C30.9838 42.3057 30.4581   41.7847 30.4543 41.1408V35.5756C30.4581 34.9317 30.9838 34.4107 31.6334 34.4069Z" fill="#572F8C"/>
          </svg>
         </div>
          <button type="button" className="modal_close_button" data-dismiss="modal" aria-label="Close" onClick={hide}>
           <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.56551 8.28392L15.2862 2.56301C15.5225 2.33476 15.6173 1.99676 15.5341 1.67891C15.4509 1.36107 15.2027 1.11285 14.8848 1.02965C14.567 0.946455 14.229 1.04123 14.0007 1.27756L8.27983 6.99824L2.55915 1.27756C2.20304 0.929273 1.63298 0.932413 1.28073 1.2846C0.928484 1.63678 0.925244 2.20685 1.27346 2.56301L6.99437 8.28392L1.27346 14.0048C1.03954 14.2336 0.94661 14.5705 1.03015 14.8868C1.11368 15.2032 1.36079 15.4503 1.67718 15.5338C1.99356 15.6172 2.3304 15.5243 2.55915   15.2903L8.27983 9.5696L14.0007 15.2903C14.1782 15.4678 14.411 15.5566 14.6435 15.5566C14.876 15.5566 15.1089 15.4678 15.2862 15.2903C15.6411 14.9353 15.6411 14.3598 15.2862 14.0048L9.56551 8.28392Z" fill="white" stroke="white"/>
           </svg>
          </button>
        </div>
        <div className="modal_title">Вход в личный кабинет
        </div>
        <form method="POST" className="ModalProfileInput">
        <label className="field_label">
        <input type="text" name="USER_LOGIN" placeholder="Введите ваш логин" required="" data-target-for="#logo" className="field" />
        <span className="field__title">Логин</span><span className="LoginStar">*</span>
      </label>
      </form>
      </div>
     </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
