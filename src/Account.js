import AccountRegistration from './AccountRegistration';

/**

Bu sınıf, hesabın yapılandırması ve kayıt durumunu temsil eder.
*/
export default class Account {
constructor(accountData) {
this._data = accountData;
this._registration = new AccountRegistration(accountData['registration']);
}
/**

Hesap ID'sini döndürür.
@returns {int}
*/
getId() {
return this._data.id;
}
/**

Kayıt için istek URI'sine konulacak olan kayıt URL'sini döndürür.
Örnek: "sip:serviceprovider".
@returns {String}
*/
getURI() {
return this._data.uri;
}
/**

Endpoint.createAccount() ile belirtilen tam adı döndürür.
@returns {String}
*/
getName() {
return this._data.name;
}
/**

Endpoint.createAccount() ile belirtilen kullanıcı adını döndürür.
@returns {String}
*/
getUsername() {
return this._data.username;
}
/**

Endpoint.createAccount() ile belirtilen etki alanını döndürür.
@returns {String|null}
*/
getDomain() {
return this._data.domain;
}
/**

Endpoint.createAccount() ile belirtilen parolayı döndürür.
@returns {String}
*/
getPassword() {
return this._data.password;
}
/**

Endpoint.createAccount() ile belirtilen proxy'yi döndürür.
@returns {String}
*/
getProxy() {
return this._data.proxy;
}
/**

Endpoint.createAccount() ile belirtilen iletişim taşınma protokolünü döndürür.
@returns {String}
*/
getTransport() {
return this._data.transport;
}
/**

Bu hesap için iletişim başlığında eklenecek ek parametreleri döndürür.
@returns {String}
*/
getContactParams() {
return this._data.contactParams;
}
/**

Bu hesap için iletişim URI'sinde eklenecek ek URI parametrelerini döndürür.
@returns {String}
*/
getContactUriParams() {
return this._data.contactUriParams;
}
/**

Endpoint.createAccount() ile belirtilen kayıt sunucusunu döndürür.
@returns {String}
*/
getRegServer() {
return this._data.regServer || '';
}
/**

Endpoint.createAccount() ile belirtilen kayıt zaman aşımını döndürür.
@returns {String}
*/
getRegTimeout() {
return this._data.regTimeout;
}
/**

Endpoint.createAccount() ile belirtilen kayıt iletişim parametrelerini döndürür.
@returns {String}
*/
getRegContactParams() {
return this._data.regContactParams;
}
/**

Hesap kayıt durumunu döndürür.
@returns {AccountRegistration}
*/
getRegistration() {
return this._registration;
}
}
