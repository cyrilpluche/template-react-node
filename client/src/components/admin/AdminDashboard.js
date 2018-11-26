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
    }

    componentDidMount () {
        const { onLoadData } = this.props
        onLoadData('Member')
    }

    render() {
        const { classes, isLoading } = this.props;

        return (
            <DataBase
                data={this.props.data}
                isLoading={this.props.isLoading}
                labels={this.props.labels}
                deleteSelectedData={this.props.onDeleteSelectedData}
                updateElement={this.props.onUpdateElement}
                table={'Member'}
            />
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
    onLoadData: _action.adminAction.loadData,
    onDeleteSelectedData: _action.adminAction.deleteData,
    onUpdateElement: _action.adminAction.updateElement
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(globalStyle)(AdminDashboard));