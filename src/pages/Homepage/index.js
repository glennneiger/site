import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
// import Button from '@serverless/components/Button'
import Default from '../../layouts/Default'
import styles from './Homepage.css'

export default class Homepage extends Component {
  static propTypes = {
    phenomicLoading: PropTypes.bool
  }
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.bg}>
              <div className={styles.hero}>
                <h1 className={styles.tagline}>The way cloud should be.</h1>
                <p className={styles.heroDescription}>Serverless is your toolkit for deploying serverless architectures to any provider. You build the features, we configure the infrastructure.</p>
              </div>
            </div>
          </div>
          <div className={`${styles.section} ${styles.toolkitSection}`}>
            <div className={`${styles.toolCard} ${styles.toolCardFramework}`}>
              <div>
                <div className={styles.toolCardTop}>
                  <h3 className={styles.toolCardTitle}>Serverless Framework</h3>
                  <img  className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/platform.svg' />
                </div>
                <h4 className={styles.toolCardTagline}>Rapid serverless deployment</h4>
                <p>Turn 200 lines of code into 4. At 18,000 stars on GitHub, the Framework started a movement.</p>
              </div>
              <Link to='/framework/'>Learn more</Link>
            </div>
            <div className={`${styles.toolCard} ${styles.toolCardEventGateway}`}>
              <div>
                <div className={styles.toolCardTop}>
                  <h3 className={styles.toolCardTitle}>Event Gateway</h3>
                  <img className={styles.toolCardIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/gateway.svg' />
                </div>
                <h4 className={styles.toolCardTagline}>Centralize events & data</h4>
                <p>React to any event, with any function, on any cloud.</p>
              </div>
              <Link to='/event-gateway/'>Learn more</Link>
            </div>
          </div>
          <div className={`${styles.introSecondary} ${styles.boundSmall}`}>
            <div className={styles.logoWrapper}>
              <img className={styles.providerLogos} src={'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/providers_black.png'} alt='aws Lambda' />
            </div>
            <h2 className={styles.sectionHeading}>Build faster with serverless architectures.</h2>
            <p className={`${styles.boundSmall} ${styles.introSecondaryText}`}>Develop, test and deploy in a single environment, to any cloud provider. You don’t have to provision infrastructure, or worry about scale. Serverless teams cut time to market in half.</p>
          </div>
          <div className={styles.featuresColumns}>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
              <h3 className={styles.featureName}>Automatic Scaling</h3>
              <p className={styles.featureDescription}>Serverless backends expand and contract with demand. Go get on the front page of HackerNews, we dare you.</p>
            </div>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
              <h3 className={styles.featureName}>Provider Agnostic</h3>
              <p className={styles.featureDescription}>Build, test and deploy cloud functions to any provider. Skip the setup; deploy your function right now.</p>
            </div>
            <div className={styles.feature}>
              <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cloud-box.svg' />
              <h3 className={styles.featureName}>Rapid deployment</h3>
              <p className={styles.featureDescription}>Serverless cuts weeks off development cycles. Don’t spend time provisioning unused infrastructure.</p>
            </div>
          </div>
          <div className={styles.sectionBreak} />
          <div className={`${styles.section} ${styles.testimonialSection}`}>
            <div className={`${styles.boundSmall} ${styles.clientsLogos}`}>
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-ea.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/nordstorm-logo.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-expedia.png' />
              <img className={styles.clientLogo} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/client-reuters.png' />
            </div>
            <div className={`${styles.testimonial} ${styles.boundSmall}`}>
              <div className={styles.testimonialTextBlock}>
                <div className={styles.testimonialGround} />
                <p className={styles.testimonialText}>“The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster.”</p>
              </div>
              <div className={styles.testimonialMeta}>
                <h3 className={styles.testimonialAuthor}>Patrick Brandt</h3>
                <p className={styles.testimonialAuthorTitle}>Solutions Architect at The Coca-Cola Company</p>
              </div>
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
