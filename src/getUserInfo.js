import decryptAESData from './decryptAESData';
import parseRawData from './parseRawData';

export default function getUserInfo(params = {}) {
	const { appId, rawData, signature, encryptedData, iv } = params;
	if (encryptedData && iv) {
		return decryptAESData({ ...params, appId });
	}
	if (rawData && signature) {
		return parseRawData(params);
	}
}
