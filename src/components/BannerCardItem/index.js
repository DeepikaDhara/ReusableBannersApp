// Write your code here.
import './index.css'

const BannerCardProfile = props => {
  const {Details} = props
  const {headerText, description, className} = Details

  return (
    <li className="bannerCardsList">
      <div className="Banner-details-container">
        <h1 className="Banner-name"> {headerText} </h1>
        <p className="Banner-description">{description}</p>
      </div>
    </li>
  )
}
export default BannerCardProfile
