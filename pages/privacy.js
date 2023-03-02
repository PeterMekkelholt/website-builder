import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from 'styles/scss/textPage.module.scss'

function Privacy() {
  return (
    <div className={styles.gradient}>
      <Header />
      <Container sx={{ my: 3 }} component="main" className={styles.container}>
        <CssBaseline />
        <Typography
          sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
          variant="h1"
          className={styles.title}
        >
          <span>PRIVACY NOTICE</span>
        </Typography>
        <Typography
          sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
          variant="h5"
          className={styles.title}
        >
          <span>Last updated January 21, 2022</span>
        </Typography>
        <Typography sx={{ px: 0, pb: 12 }}>
          Thank you for choosing to be part of our community
          at Momentus ("Company," "we," "us," or "our"). We are committed to
          protecting your personal information and your right to privacy. If you
          have any questions or concerns about this privacy notice or our
          practices with regard to your personal information, please contact us
          at customerservice@momentus.ai.
          <br />
          <br />
          The purpose of this privacy notice is to explain to you in the
          clearest way possible what information we collect, how we use it, and
          what rights you have in relation to it. If there are any terms in this
          privacy notice that you do not agree with, please discontinue use of
          our Services immediately.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>WHAT INFORMATION DO WE COLLECT?</span>
          </Typography>
          Personal information you disclose to us
          <br />
          In Short:  We collect personal information that you provide to us.
          <br />
          We collect personal information that you voluntarily provide to us
          when you register or express an interest in obtaining information
          about us or our products and Services, when you participate in
          activities on the Site or otherwise when you contact us.
          <br />
          The personal information that we collect depends on the context of
          your interactions with us, the choices you make and the products and
          features you use. The personal information we collect may include
          information you shared in order to register (name, email address), as
          well as any information you provide in order to personalize your
          experience.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>Information automatically collected?</span>
          </Typography>
          In Short:  Some information such as your Internet Protocol (IP)
          address and/or browser and device characteristics is collected
          automatically when you visit our Site.
          <br />
          We automatically collect certain information when you visit, use or
          navigate the Site. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our and other technical information. This information
          is primarily needed to maintain the security and operation of
          our Site, and for our internal analytics and reporting purposes.
          <br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</span>
          </Typography>
          In Short:  We only share information with your consent, to comply with
          laws, to provide you with services, to protect your rights, or to
          fulfill business obligations.
          <br />
          More specifically, we may need to process your data or share your
          personal information in the following situations:
          <br />
          <ul>
            <li>
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </li>
            <li>
              Affiliates. We may share your information with our affiliates, in
              which case we will require those affiliates to honor this privacy
              notice. Affiliates include our parent company and any
              subsidiaries, joint venture partners or other companies that we
              control or that are under common control with us.
            </li>
            <li>
              Business Partners. We may share your information with our business
              partners to offer you certain products, services or promotions.
            </li>
            <li>
              Other Users. When you share personal information or otherwise
              interact with public areas of the , such personal information may
              be viewed by all users and may be publicly made available outside
              the in perpetuity. If you interact with other users of our and
              register for our through a social network (such as Facebook), your
              contacts on the social network will see your name, profile photo,
              and descriptions of your activity. Similarly, other users will be
              able to view descriptions of your activity, communicate with you
              within our , and view your profile.
            </li>
          </ul>
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span>
          </Typography>
          In Short:  We may use cookies and other tracking technologies to
          collect and store your information.
          <br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span>
          </Typography>
          In Short:  If you choose to register or log in to our services using a
          social media account, we may have access to certain information about
          you.
          <br />
          Our Site offers you the ability to register and login using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, profile picture as well as other information you choose
          to make public on such social media platform.
          <br />
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Site page. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span> IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</span>
          </Typography>
          In Short:  We may transfer, store, and process your information in
          countries other than your own.
          <br />
          Our servers are located in the United States. If you are accessing our
          Site from outside the United States, please be aware that your
          information may be transferred to, stored, and processed by us in our
          facilities and by those third parties with whom we may share your
          personal information (see "WILL YOUR INFORMATION BE SHARED WITH
          ANYONE?" above), in the United States and other countries.
          <br />
          If you are a resident in the European Economic Area (EEA) or United
          Kingdom (UK), then these countries may not necessarily have data
          protection laws or other similar laws as comprehensive as those in
          your country. We will however take all necessary measures to protect
          your personal information in accordance with this privacy notice and
          applicable law.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>HOW LONG DO WE KEEP YOUR INFORMATION?</span>
          </Typography>
          In Short:  We keep your information for as long as necessary to
          fulfill the purposes outlined in this privacy notice unless otherwise
          required by law.
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than 6
          months after your account is closed.
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>DO WE COLLECT INFORMATION FROM MINORS?</span>
          </Typography>
          In Short:  We do not knowingly collect data from or market to children
          under 18 years of age.
          <br />
          We do not knowingly solicit data from or market to children under 18
          years of age. By using the Site, you represent that you are at least
          18 or that you are the parent or guardian of such a minor and consent
          to such minor dependent’s use of the Site. If we learn that personal
          information from users less than 18 years of age has been collected,
          we will deactivate the account and take reasonable measures to
          promptly delete such data from our records. If you become aware of any
          data we may have collected from children under age 18, please contact
          us at customerservice@momentus.ai.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>WHAT ARE YOUR PRIVACY RIGHTS?</span>
          </Typography>
          In Short:  You may review, change, or terminate your account at any
          time.  <br />
          If you are a resident in the EEA or UK and you believe we are
          unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here: 
          <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html">
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.html
          </a>
          .
          <br />
          If you are a resident in Switzerland, the contact details for the data
          protection authorities are available here: 
          <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </a>
          .
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>Account Information</span>
          </Typography>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
          <br />
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          Terms of Use and/or comply with applicable legal requirements.
          <br />
          Opting out of email marketing: You can unsubscribe from our marketing
          email list at any time by clicking on the unsubscribe link in the
          emails that we send or by contacting us using the details provided
          below. You will then be removed from the marketing email list â€”
          however, we may still communicate with you, for example to send you
          service-related emails that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes. To otherwise opt-out, you may:
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>CONTROLS FOR DO-NOT-TRACK FEATURES</span>
          </Typography>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice. 
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span>
          </Typography>
          In Short:  Yes, if you are a resident of California, you are granted
          specific rights regarding access to your personal information.
          <br />
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
          <br />
          If you are under 18 years of age, reside in California, and have a
          registered account with , you have the right to request removal of
          unwanted data that you publicly post on the . To request removal of
          such data, please contact us using the contact information provided
          below, and include the email address associated with your account and
          a statement that you reside in California. We will make sure the data
          is not publicly displayed on the , but please be aware that the data
          may not be completely or comprehensively removed from all our systems
          (e.g. backups, etc.).
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>DO WE MAKE UPDATES TO THIS NOTICE?</span>
          </Typography>
          In Short:  Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
          <br />
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>
          </Typography>
          If you have questions or comments about this notice, you may email us
          at customerservice@momentus.ai or by post to:
          <br />
          Momentus
          <br />
          900 Veterans Blvd, 6th Floor
          <br />
          Redwood City, California 94063
          <br />
          <br />
          <Typography
            sx={{ pt: { xs: 0, md: 6 }, pb: 4 }}
            variant="h4"
            className={styles.title}
          >
            <span>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </span>
          </Typography>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information,
          please submit a request form by emailing us at
          customerservice@momentus.ai.
          <br />
          <br />
        </Typography>
      </Container>
      <Footer />
    </div>
  )
}

export default Privacy
