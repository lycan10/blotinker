import React, { useEffect } from 'react';
import "./mailform.css";

const MailForm = () => {
  useEffect(() => {
    // Load MailerLite script
    const script = document.createElement('script');
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127";
    script.async = true;
    document.body.appendChild(script);

    // Define success function for MailerLite form
    window.ml_webform_success_15832814 = function() {
      const rowSuccess = document.querySelector('.ml-subscribe-form-15832814 .row-success');
      const rowForm = document.querySelector('.ml-subscribe-form-15832814 .row-form');
      if (rowSuccess) rowSuccess.style.display = 'block';
      if (rowForm) rowForm.style.display = 'none';
    };

    return () => {
      // Cleanup the script
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mlb2-15832814" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-15832814">
      <div className="ml-form-align-center">
        <div className="ml-form-embedWrapper embedForm">
          <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
            <div className="ml-form-embedContent" style={{ marginBottom: "0px" }}>
            </div>
            <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/997665/forms/124874993002611730/subscribe" data-code="" method="post" target="_blank">
              <div className="ml-form-formContent">
                <div className="ml-form-fieldRow">
                  <div className="ml-field-group ml-field-name name-form">
                    <input aria-label="name" type="text" className="form-control" name="fields[name]" placeholder="Name" autoComplete="given-name" />
                  </div>
                </div>
                <div className="ml-form-fieldRow ml-last-item">
                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                    <input aria-label="email" aria-required="true" type="email" className="form-control" name="fields[email]" placeholder="Email" autoComplete="email" />
                  </div>
                </div>
              </div>
              <div className="ml-form-checkboxRow ml-validate-required">
                <label className="checkbox check-row">
                  <input type="checkbox" />
                  <div className="label-description">
                    <p>Opt in to receive new updates.</p>
                  </div>
                </label>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="primary">Subscribe</button>
                <button disabled="disabled" style={{ display: "none" }} type="button" className="loading">
                  <div className="ml-form-embedSubmitLoad"></div>
                  <span className="sr-only">Loading...</span>
                </button>
              </div>
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          </div>
          <div className="ml-form-successBody row-success success-height" style={{ display: "none" }}>
            <div className="ml-form-successContent success-mes">
              <h4>Thank you!</h4>
              <p>You have successfully joined our subscriber list.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailForm;
