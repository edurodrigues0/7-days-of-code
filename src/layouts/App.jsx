import PropTypes from "prop-types";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="max-w-[1512px] w-full h-screen bg-white mx-auto">
      { children }
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}