import React from "react";
import styles from "./TermsofUse.module.sass";

const TermsofUse: React.FC = () => {
  return (
    <div className={styles.termsOfUse}>
      <h1>Terms of Use</h1>
      <p>Effective Date: November 24, 2024</p>
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to WillAn World! By accessing or using our services, you agree to be bound by these Terms of Use.
        </p>
      </section>
      <section>
        <h2>2. Use of the Service</h2>
        <p>
          You agree to use the service only for lawful purposes and in accordance with these Terms. You must not:
        </p>
        <ul>
          <li>Engage in any unlawful or fraudulent activity.</li>
          <li>Violate intellectual property rights of others.</li>
          <li>Disrupt or damage the service or its content.</li>
        </ul>
      </section>
      <section>
        <h2>3. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized access or use of your account.
        </p>
      </section>
      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          All content, trademarks, and materials on the service are the property of WillAn World. Unauthorized use is prohibited.
        </p>
      </section>
      <section>
        <h2>5. Termination</h2>
        <p>
          We may suspend or terminate your access to the service if you violate these Terms or engage in prohibited activities.
        </p>
      </section>
      <section>
        <h2>6. Limitation of Liability</h2>
        <p>
          WillAn World is not liable for any damages or losses resulting from the use or inability to use the service.
        </p>
      </section>
      <section>
        <h2>7. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Country/State].
        </p>
      </section>
      <section>
        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be communicated on this page.
        </p>
      </section>
      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:support@willansworld.com">support@willansworld.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsofUse;
