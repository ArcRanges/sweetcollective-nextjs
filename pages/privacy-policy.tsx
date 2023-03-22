import Container from "components/Container";
import Layout from "containers/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Container className="my-5" style={{ maxWidth: 600 }}>
        <h1 className="text-2xl md:text-5xl">Privacy Policy</h1>
        <p>
          Sweet Collective Co. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
          is committed to protecting the privacy of our customers
          (&quot;you&quot;, &quot;your&quot;). This Privacy Policy ("Policy")
          describes the types of personal information we collect, how we use and
          share it, and the choices you can make about our collection, use and
          sharing of your personal information. We encourage you to read this
          Policy carefully and contact us if you have any questions or concerns.
        </p>

        <h2 className="text-xl">Information We Collect</h2>

        <p>
          We collect various types of information from and about you, including:
        </p>

        <ul>
          <li>
            Personal information you provide to us: This may include your name,
            email address, mailing address, phone number, and payment
            information.
          </li>
          <li>
            Information collected automatically: We may automatically collect
            information about your use of our website, such as your browsing
            history, purchase history, and location information.
          </li>
          <li>
            Information from third-party sources: We may collect information
            about you from third-party sources, such as social media platforms,
            to help us personalize your experience on our website and improve
            our marketing efforts.
          </li>
        </ul>

        <h2 className="text-xl">Use of Information</h2>

        <p>
          We use the information we collect for various purposes, including:
        </p>

        <ul>
          <li>
            To provide you with products and services: We use your information
            to process your orders and provide you with customer service.
          </li>
          <li>
            To improve our website and services: We use your information to
            understand how you use our website and to improve our products and
            services.
          </li>
          <li>
            To communicate with you: We may use your information to send you
            marketing communications and other information about our products
            and services.
          </li>
        </ul>

        <h2 className="text-xl">Sharing of Information</h2>

        <p>
          We may share your information with third parties for various purposes,
          including:
        </p>

        <ul>
          <li>
            Service providers: We may share your information with third-party
            service providers who perform services on our behalf, such as
            payment processing and order fulfillment.
          </li>
          <li>
            Business partners: We may share your information with our business
            partners for joint marketing and promotional efforts.
          </li>
          <li>
            Legal reasons: We may disclose your information to third parties if
            we believe it is necessary to comply with a legal obligation, to
            protect our rights or the rights of others, or to prevent fraud or
            other illegal activities.
          </li>
        </ul>

        <h2 className="text-xl">Choice and Control</h2>

        <p>
          We respect your right to make choices about the collection, use and
          sharing of your personal information. You can do this by:
        </p>

        <ul>
          <li>
            Opting out of marketing communications: You can unsubscribe from our
            marketing emails by clicking on the unsubscribe link at the bottom
            of the email or by contacting our customer support team.
          </li>
          <li>
            Updating your account information: You can update your personal
            information and preferences by logging in to your account on our
            website.
          </li>
          <li>
            Contacting us: If you have any questions or concerns about our
            privacy practices, please contact us at our customer support email.
          </li>
        </ul>

        <h2 className="text-xl">Changes to this Policy</h2>

        <p>
          We may update this Policy from time to time to reflect changes in our
          privacy practices. We will notify you of any material changes by
          posting the new Policy on our website.
        </p>

        <p>Effective Date</p>
        <p>This Policy is effective as of January 21st, 2023.</p>
        <p>Contact Us</p>
        <p>
          If you have any questions or concerns about our privacy practices,
          please contact us at [customer support email]
        </p>
        <p>Thank you for choosing Sweet Collective Co.</p>
      </Container>
    </Layout>
  );
}
