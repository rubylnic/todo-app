
// import { useAppDispatch, useAppSelector } from "../store/hooks";
import '../scss/Modal.scss';
// import { closeModal } from "../store/modalSlice";

export default function Modal(props) {
    // const dispatch = useAppDispatch();
    const type = props.type;
    const children = props.children;
    const title = props.title;

    function onCloseModal() {
        // dispatch(closeModal(type))
    }

    return (
        <section className="modal">
            <div className="modal__overlay" onClick={onCloseModal}>
                <div className="modal__container" onClick={e => e.stopPropagation()}>
                    <button className="modal__button-close" type="button" aria-label="Закрыть окно" onClick={onCloseModal}></button>
                    <h2 className="modal__title">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    )
}
