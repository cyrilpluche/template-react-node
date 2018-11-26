import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SettingsIcon from '@material-ui/icons/Settings';

export default class FormDialog extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            open: false,
            element: this.props.element
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleUpdate = () => {
        this.props.updateElement(this.props.table, this.state.element, this.props.index)
        this.setState({ open: false });
    };

    handleChange = name => event => {
        let updatedElement = Object.assign({}, this.state.element)
        updatedElement[name] = event.target.value
        this.setState({
            element: updatedElement,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>
                    <SettingsIcon/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Update</DialogTitle>
                    <DialogContent>
                        {Object.values(this.state.element).map((value, index) =>
                            Object.keys(this.state.element)[index] !== '_id' && Object.keys(this.state.element)[index] !== '__v' ? (
                                <TextField
                                    key={index}
                                    autoFocus
                                    margin="dense"
                                    id={Object.keys(this.state.element)[index]}
                                    label={Object.keys(this.state.element)[index]}
                                    type="text"
                                    value={value}
                                    onChange={this.handleChange(Object.keys(this.state.element)[index])}
                                    fullWidth
                                />
                            ) : (
                                null
                            )
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleUpdate} color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}