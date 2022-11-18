import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BookmarkModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Lorem LoremReprehenderit veniam ipsum aliqua cillum mollit duis
          aliqua. Et eu ut consequat id tempor irure pariatur dolore. Incididunt
          consequat sint veniam officia deserunt proident. In laboris do anim
          veniam nulla do elit commodo laboris commodo dolore quis irure
          commodo. Occaecat cillum consectetur cupidatat id. Consequat eiusmod
          veniam ipsum tempor adipisicing consectetur c Lorem LoremReprehenderit
          veniam ipsum aliqua cillum mollit duis aliqua. Et eu ut consequat id
          tempor irure pariatur dolore. Incididunt consequat sint veniam officia
          deserunt proident. In laboris do anim veniam nulla do elit commodo
          laboris commodo dolore quis irure commodo. Occaecat cillum consectetur
          cupidatat id. Consequat eiusmod veniam ipsum tempor adipisicing
          consectetur cillum occaecat esse. Eu velit do culpa ullamco dolore
          cillum dolore veniam laborum ea. Ipsum nostrud magna non dolor aliqua
          mollit incididunt aute. Fugiat eu voluptate aute adipisicing ipsum do
          laborum duis exercitation amet ut labore eu. Duis commodo velit
          reprehenderit minim esse occaecat. Labore est mollit nulla et non
          eiusmod nostrud adipisicing magna occaecat. Enim in consequat nostrud
          in. Enim magna ad dolore sunt. Duis veniam ullamco ex adipisicing
          exercitation nisi dolor qui quis. Quis amet dolore non exercitation
          eiusmod consequat in. Anim magna aliqua anim cupidatat pariatur. Et
          qui commodo eiusmod elit minim aliquip velit cillum voluptate est.
          Consectetur reprehenderit qui cillum labore velit aliqua Lorem
          proident culpa cillum nostrud cillum. Esse ipsum voluptate sunt duis
          officia cupidatat cillum cillum ut velit dolore aliquip nostrud
          eiusmod. Nisi pariatur veniam laboris est sunt tempor consectetur non
          tempor cupidatat anim et deserunt deserunt. Nostrud in adipisicing
          voluptate labore. Magna eiusmod qui excepteur eiusmod proident aliqua
          esse. Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>

    // <Modal.Dialog>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal title</Modal.Title>
    //   </Modal.Header>

    //   <Modal.Body>
    //     <p>Modal body text goes here.</p>
    //   </Modal.Body>

    //   <Modal.Footer>
    //     <Button variant="secondary">Close</Button>
    //     <Button variant="primary">Save changes</Button>
    //   </Modal.Footer>
    // </Modal.Dialog>
  );
}

export default BookmarkModal;

// const BookmarkModal = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     return false;
//   };

//   return (
//     <div
//       className="modal fade"
//       id="newModal"
//       tabIndex="-1"
//       aria-labelledby="newModalLabel">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content modal-dialog-scrollable">
//           <form onSubmit={handleSubmit}>
//             <div className="modal-header">
//               <h5 className="modal-title">북마크 관리</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <div className="table-responsive">
//                 <table
//                   className="table table-striped"
//                   style={{ tableLayout: "fixed" }}>
//                   <thead>
//                     <tr>
//                       <td className="col-3 text-end">그룹</td>
//                       <td className="col-9 text-start">
//                         <select
//                           className="form-select"
//                           id="sel-new-modal-names">
//                           <option value="1345">그룹1</option>
//                           <option value="1345">그룹2</option>
//                           <option value="1345">그룹3</option>
//                           <option value="1345">그룹4</option>
//                           <option value="1345">그룹5</option>
//                         </select>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="col-3 text-end">카테고리</td>
//                       <td className="col-9 text-start">
//                         <select
//                           className="form-select"
//                           id="sel-new-modal-names">
//                           <option value="1345">카테고리1</option>
//                           <option value="1345">카테고리2</option>
//                           <option value="1345">카테고리3</option>
//                           <option value="1345">카테고리4</option>
//                           <option value="1345">카테고리5</option>
//                         </select>
//                       </td>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="col-3 text-end">북마크 URL</td>
//                       <td className="col-9 text-start">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="txt-bookmark-url"
//                         />
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="col-3 text-end">북마크명</td>
//                       <td className="col-9 text-start">
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="txt-bookmark-title"
//                         />
//                         <div
//                           className="btn-group p-2"
//                           role="group"
//                           aria-label="Basic checkbox toggle button group">
//                           <input
//                             type="checkbox"
//                             className="btn-check"
//                             id="btncheck1"
//                             autoComplete="off"
//                           />
//                           <label
//                             className="btn btn-outline-primary"
//                             htmlFor="btncheck1">
//                             중요
//                           </label>

//                           <input
//                             type="checkbox"
//                             className="btn-check"
//                             id="btncheck2"
//                             autoComplete="off"
//                           />
//                           <label
//                             className="btn btn-outline-primary"
//                             htmlFor="btncheck2">
//                             취소선
//                           </label>
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td className="text-end">메모</td>
//                       <td className="text-start">
//                         <textarea
//                           className="form-control"
//                           id="txt-new-memo"></textarea>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <div className="modal-footer row">
//               <div className="col">
//                 <button
//                   type="submit"
//                   className="btn btn-danger w-100"
//                   id="btn-new-modal-delete">
//                   삭제
//                 </button>
//               </div>
//               <div className="col">
//                 <button
//                   type="submit"
//                   className="btn btn-primary w-100"
//                   id="btn-new-modal-save">
//                   저장
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookmarkModal;
