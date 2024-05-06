import { GetCapabilitiesPaginatedParams } from "src/app/models/datamodels/get-capabilities-paginated-params";

export const CAPABILITIES_PAGINATED_INITIAL: GetCapabilitiesPaginatedParams = {
	page: 0,
	size: 10,
	isAscending: true,
	isSortByTechnologiesAmount: false
}
