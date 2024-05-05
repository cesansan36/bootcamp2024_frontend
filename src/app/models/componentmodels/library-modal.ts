import { ModalModel } from "./modal-model"
import { ModalResultModel } from "./modal-result-model"

export interface LibraryModal {
	isModalResult : boolean
	modal: ModalModel
	modalResult: ModalResultModel
}
