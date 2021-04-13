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

const styles = {
    gridContainer: {
        width: '50%',
        transform: 'translate(50%, 10px)',
        marginBottom: '20px'
    },
    header: {
        backgroundColor: 'grey',
        color: 'white',

    }
};


const COLUMNS = [{
    field: 'name',
    headerName: 'Acitivty Name',
    flex: 2
}, {
    field: 'cf',
    headerName: 'COVID friendly',
    valueGetter: (params) => `${params.value ? 'Yes' : 'No'}`,
    flex: 1
}, {
    field: 'times',
    headerName: 'Times performed',
    type: 'number',
    flex: 1
}]
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

function Activities(props) {

    const { classes } = props;
    const [activities, setActivities] = React.useState(ROWS);
    const [selected, setSelected] = React.useState({});

    const handlePerform = () => {
        const notAllowed = [];
        const tmpActivities = [...activities];

        for (const [key, value] of Object.entries(selected)) {
            if (value.cf) {
                console.log(key + 'is allowed');
                const activity = tmpActivities.filter(activity => activity.id == key)[0];
                console.log('Act selected')
                console.log(activity);

                activity.times += 1;
            } else {
                notAllowed.push(value.name);
            }
        }
        setActivities(tmpActivities);
        setSelected({});
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
            <h1>My 2020 Activities</h1>
            <div className={classes.gridContainer}>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead className={classes.header}>
                            <TableRow>
                                <StyledTableCell padding="checkbox">
                                    <Checkbox
                                        checked={Object.keys(selected).length && Object.keys(selected).length === activities.length}
                                        onChange={onSelectAllClick}
                                    />
                                </StyledTableCell>
                                <StyledTableCell>Activity name</StyledTableCell>
                                <StyledTableCell>COVID friendly</StyledTableCell>
                                <StyledTableCell align="right">Times performed</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {activities.map((activity) => {
                                const isItemSelected = activity.id in selected;
                                return (<TableRow
                                    key={activity.name}
                                    hover
                                    tabIndex={-1}
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
                disabled={!Object.keys(selected).length}
                onClick={handlePerform}>PERFORM!</Button>
        </React.Fragment>
    )
}

export default withStyles(styles)(Activities);
