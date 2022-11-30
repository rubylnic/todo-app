
import '../scss/Modal.scss';

export default function Modal({ type, children, title, showModal }) {


    function onCloseModal() {
        showModal(false)
    }

    return (
        <section className="modal">
            <div className="modal__overlay" onClick={onCloseModal}>
                <div className="modal__container" onClick={e => e.stopPropagation()}>
                    <button className="modal__button-close" type="button" aria-label="Закрыть окно" onClick={onCloseModal}></button>
                    <h2 className="todo__title">{title}</h2>
                    {children}
                </div>
            </div>
        </section>
    )
}
