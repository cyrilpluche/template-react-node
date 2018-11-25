/** REACT */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import _action from '../../actions'
import _business from './Business'
import DataBase from './dataTable/DataTable'

/** STYLES */
import { style } from './Style'
import { globalStyle } from '../../style'

class AdminDashboard extends React.Component {

    constructor (props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        console.log(this.props.labels)
    }

    componentDidMount () {
        const { onLoadMembers } = this.props
        onLoadMembers()
    }

    render() {
        const { classes } = this.props;

        return (
            <DataBase data={this.props.data} isLoading={this.props.isLoading} labels={this.props.labels} />
        )
    }
}

AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isLoading: state.Admin.isLoading,
    data: state.Admin.data,
    labels: state.Admin.labels
})

const mapDispatchToProps = {
    onLoadMembers: _action.adminAction.loadMembers
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminDashboard));