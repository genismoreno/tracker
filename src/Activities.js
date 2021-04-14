import React from "react";

// @material-ui/core
import {
    withStyles,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Checkbox
} from "@material-ui/core";

//components
import UnperformedModal from './UnperformedModal';

const styles = {
    gridContainer: {
        width: '50%',
        transform: 'translate(50%, 10px)',
        marginBottom: '20px'
    },
    header: {
        backgroundColor: 'grey',
        color: 'white',
    },
    modalHeader: {
        backgroundColor: 'rgb(255, 0, 0, 0.7)'
    }
};

const ROWS = [{
    id: 12,
    name: 'Netflix & Chill',
    cf: true,
    times: 50
}, {
    id: 1,
    name: 'Bday in restaurant',
    cf: false,
    times: 0
}, {
    id: 2,
    name: 'Vacations in Hawaii',
    cf: false,
    times: 1
}, {
    id: 3,
    name: 'Becoming Maria Kondo',
    cf: true,
    times: 2
}, {
    id: 4,
    name: 'Disco time!',
    cf: false,
    times: 0
}, {
    id: 5,
    name: 'Baking some bread',
    cf: true,
    times: 1
}, {
    id: 6,
    name: 'Buying in Amazon',
    cf: true,
    times: 3
}];

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: 'lightGrey',
        color: theme.palette.common.black,
        fontWeight: 800
    }
}))(TableCell);

export function Activities(props) {

    const { classes } = props;
    const [activities, setActivities] = React.useState(ROWS);
    const [selected, setSelected] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [unperformedActivities, setUnperformedActivities] = React.useState([]);

    const handlePerform = () => {
        const notAllowed = [];
        const tmpActivities = [...activities];

        for (const [key, value] of Object.entries(selected)) {
            if (value.cf) {
                const activity = tmpActivities.filter(activity => activity.id == key)[0];
                activity.times += 1;
            } else {
                notAllowed.push(value.name);
            }
        }
        setActivities(tmpActivities);
        setSelected({});
        if (notAllowed.length) {
            setUnperformedActivities(notAllowed);
            setShowModal(true);
        }
    }

    const onSelectAllClick = (event) => {
        event.target.checked ? setSelected(activities.reduce((acc, curr) => (acc[curr['id']] = curr, acc), {})) : setSelected([]);
    }

    const onRowClick = (event, row) => {
        if (event.target.checked) {
            setSelected({ ...selected, [row.id]: row })
        } else {
            const tmpSelected = { ...selected };
            delete tmpSelected[row.id];
            setSelected(tmpSelected);
        }
    }

    return (
        <React.Fragment>
            <UnperformedModal
                show={showModal}
                close={() => {
                    setShowModal(false);
                    setUnperformedActivities([]);
                }}
                activities={unperformedActivities}
                classes={classes}
            />
            <h1 test-id='activities-title'>My 2020 Activities</h1>
            <div className={classes.gridContainer}>
                <TableContainer component={Paper}>
                    <Table test-id='activities-table'>
                        <TableHead className={classes.header} test-id='activities-header'>
                            <TableRow>
                                <StyledTableCell padding="checkbox" test-id='activities-header-checkbox'>
                                    <Checkbox
                                        checked={Object.keys(selected).length && Object.keys(selected).length === activities.length}
                                        onChange={onSelectAllClick}
                                    />
                                </StyledTableCell>
                                <StyledTableCell test-id='activities-header-name'>Activity name</StyledTableCell>
                                <StyledTableCell test-id='activities-header-cf'>COVID friendly</StyledTableCell>
                                <StyledTableCell align="right" test-id='activities-header-times'>Times performed</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {activities.map((activity) => {
                                const isItemSelected = activity.id in selected;
                                return (<TableRow
                                    key={activity.id}
                                    hover
                                    role="checkbox"
                                    onClick={e => onRowClick(e, activity)}
                                    selected={isItemSelected}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected} />
                                    </TableCell>
                                    <TableCell component="th">{activity.name}</TableCell>
                                    <TableCell>{activity.cf ? 'Yes' : 'No'}</TableCell>
                                    <TableCell align="right">{activity.times}</TableCell>
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <Button
                color="primary"
                variant="contained"
                test-id='activities-button'
                disabled={!Object.keys(selected).length}
                onClick={handlePerform}>PERFORM!</Button>
        </React.Fragment>
    )
}

export default withStyles(styles)(Activities);
