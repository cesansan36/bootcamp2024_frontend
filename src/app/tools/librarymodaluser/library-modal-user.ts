import { LibraryModal } from "src/app/models/componentmodels/library-modal";
import { ButtonTextConstants } from "src/utils/button-text-constants";
import { LIBRARY_MODAL_INITIAL } from "src/utils/initialstates/component/librarymodal/library-modal";
import { MODAL_INITIAL } from "src/utils/initialstates/component/modal/modal-initial";

export class LibraryModalUser {

	constructor(modalTitle: string) {
		this.libraryModal = {
			...LIBRARY_MODAL_INITIAL,
			modal: {
				...MODAL_INITIAL,
				buttonText: ButtonTextConstants.CREATE,
				title: modalTitle
			}
		};
	}

	libraryModal: LibraryModal;

	hideModal() {
		this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		this.libraryModal.modal.isModalVisible = false;
		this.libraryModal.isModalResult = false;
	}

	isCreateClick() {
		return this.libraryModal.modal.buttonText === ButtonTextConstants.CREATE;
	}

	handleModalButtonClick() {
		if (this.libraryModal.modal.buttonText === ButtonTextConstants.ACCEPT) {
			this.hideModal();
		}
		else {
			this.libraryModal.isModalResult = false;
			this.libraryModal.modal.buttonText = ButtonTextConstants.CREATE;
		}
	}

	setResultMessageSuccess(message: string) {
		this.libraryModal.modal.buttonText = ButtonTextConstants.ACCEPT;
		this.libraryModal.modalResult.text = message;
		this.libraryModal.modalResult.isSuccess = true;
		this.libraryModal.isModalResult = true;
	}
	setResultMessageError(message: string) {
		this.libraryModal.modal.buttonText = ButtonTextConstants.GO_BACK;
		this.libraryModal.modalResult.text = message;
		this.libraryModal.modalResult.isSuccess = false;
		this.libraryModal.isModalResult = true;
	}
}
