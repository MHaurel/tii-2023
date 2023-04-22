import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { useState } from "react";

function SegmentedButtonsFilterDate() {
    const [filter, setFilter] = useState('month');
    
    const handleChange = (e, v) => {
        setFilter(v)
    }
    
    return (
        <ToggleButtonGroup
            orientation="horizontal"
            color="primary"
            value={filter}
            exclusive
            onChange={handleChange}
            aria-label="DateFilter"
        >
            <ToggleButton value="week">This week</ToggleButton>
            <ToggleButton value="month">This month</ToggleButton>
            <ToggleButton value="year">This year</ToggleButton>
            <ToggleButton value="all">All time</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default SegmentedButtonsFilterDate;