/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** MATERIAL UI */
import { style } from './Style'
import { globalStyle } from '../../style'

class AdminDashboard extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={ style.main } >
                Yah yah yah

                <div className={ classes.main }>
                    oh oh oh
                </div>
            </div>
        )
    }
}

AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminDashboard));