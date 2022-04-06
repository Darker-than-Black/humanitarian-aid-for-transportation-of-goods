export const API_URL = 'https://meddata.com.ua/';

export const GET_TRANSPORTATION_OF_GOODS = `${API_URL}index.php?method=humanitarian&function=getLogisticsSupplies`;

export const GET_DRIVES = `${API_URL}index.php?method=getAngular&function=getGumDriver`;
export const ADD_DRIVER = `${API_URL}index.php?method=getAngular&function=saveGumDriver`;

export const GET_TRANSPORTS = `${API_URL}index.php?method=getAngular&function=getGumTransport`;
export const ADD_TRANSPORT = `${API_URL}index.php?method=getAngular&function=saveGumTransport`;

export const GET_STATUSES = `${API_URL}index.php?method=getAngular&function=getLogisticsStatus`;

export const GET_PRIORITIES = `${API_URL}index.php?method=humanitarian&function=getHumPriorities`;

export const UPDATE_TRANSPORTATION_OF_ITEM = `${API_URL}index.php?method=getAngular&function=saveGumLogistics`;

export const SET_COORDINATOR = `${API_URL}index.php?method=getAngular&function=assignMeLogistics`;

export const GET_TRAVEL_LETTERS = `${API_URL}index.php?method=humanitarian&function=getRouteList`;
