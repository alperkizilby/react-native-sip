/**
 * Hesap kayıt bilgileri. Uygulama, hesap.getRegistration() çağrısı yaparak
 * kayıt bilgilerini sorgulayabilir.
 */
export default class AccountRegistration {
  _status;
  _statusText;
  _active;
  _reason;

  constructor({ status, statusText, active, reason }) {
    this._status = status;
    this._statusText = statusText;
    this._active = active;
    this._reason = reason;
  }

  /**
   * Son kayıt durumu kodu (RFC 3261'e göre SIP durum kodları).
   * Durum kodu boş ise, hesap şu anda kayıtlı değildir. Herhangi bir diğer değer, kaydın
   * SIP durum kodunu gösterir.
   *
   * @returns {string|null}
   */
  getStatus() {
    return this._status;
  }

  /**
   * Kayıt durumunu açıklayan metin.
   *
   * @returns {string|null}
   */
  getStatusText() {
    return this._statusText;
  }

  /**
   * Bu hesabın şu anda kayıtlı olup olmadığını belirten bayrak
   * (etkin bir kayıt oturumuna sahip mi?).
   *
   * @returns boolean
   */
  isActive() {
    return this._active;
  }

  /**
   * Alınan gerekçe ifadesi.
   *
   * @returns {String|null}
   */
  getReason() {
    return this._reason;
  }

  toJson() {
    return {
      status: this._status,
      statusText: this._statusText,
      active: this._active,
      reason: this._reason,
    };
  }
}
