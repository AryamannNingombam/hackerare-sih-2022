import { Modal } from "antd";
import styles from "styles/ModalComponent.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalComponent = ({
  heading,
  children,
  show,
  setShow,
}) => {
  const closeModal = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        className={styles.modalContainer}
        visible={show}
        centered
        width={690}
      >
        <div className={styles.headingController}>
          <div className={styles.headingtextController}>
            <h1>{heading}</h1>
          </div>
          <div>
            <AiFillCloseCircle
              style={{ color: "#424342", fontSize: "2rem", cursor: "pointer" }}
              onClick={closeModal}
            />
          </div>
        </div>
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
