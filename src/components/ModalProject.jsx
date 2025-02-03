import "./ModalProject.css";


export const ModalProject = ({ imageToModal, titleToModal, setShowModalProject }) => {
  return (
    <div className="modal fade show"  style={{ display: 'block' }} 
    >
      <div className="modal-dialog" style={{ maxWidth: '60%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{titleToModal}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={()=> setShowModalProject(false)}
            ></button>
          </div>
          <div className="modal-body">
            <img src={imageToModal} alt="" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={()=> setShowModalProject(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
