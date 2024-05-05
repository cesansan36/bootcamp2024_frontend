import { LibraryModal } from "src/app/models/componentmodels/library-modal";
import { MODAL_INITIAL } from "../modal/modal-initial";
import { MODAL_RESULT_INITIAL } from "../modalresult/modal-result-initial";

export const LIBRARY_MODAL_INITIAL : LibraryModal = {
	isModalResult: false,
	modal: {...MODAL_INITIAL},
	modalResult: {...MODAL_RESULT_INITIAL}
}
