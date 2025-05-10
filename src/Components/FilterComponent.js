import React, {useState} from "react";
import Form from "react-bootstrap/Form";

const FilterComponent = ({filters=[], onFilterChange}) => {
    const [selectedFilters, setSelectedFilters] = useState (
        filters.reduce((acc, filter) => {
            acc [filter.id] = "All";
            return acc;

        }, {})
);

    const handleChange = (e, filterId) => {
        const updatedFilters = { ...selectedFilters, [filterId]: e.target.value };
        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);

    };

  return (
    <div className="filter-container mb-4">
        <Form className="d-flex gap-3">
            {filters.map((filter) => (
                <Form.Group key={filter.id} controlId = {filter.id} className="w-25">
                    <Form.Label>{filter.label}</Form.Label>
                    <Form.Select
                        value={selectedFilters[filter.id]}
                        onChange = {(e) => handleChange(e, filter.id)}
                    >
                        <option value="All">All</option>
                        {filter.options.map (( option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            ))}
        </Form>
    </div>
  )
}

export default FilterComponent;
