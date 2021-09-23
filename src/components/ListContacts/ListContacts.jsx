import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ations from '../../redux/actions'


function ListContacts({ contacts, onClick }) {

  return (<ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} {number}
        <button onClick={() => onClick(id)} type="button">
          delete
        </button>
      </li>
    ))}
  </ul>)
}

ListContacts.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  onClick: PropTypes.func.isRequired,
};

const filteredContactList = (fullList, filter) => {
  const filterValueNorm = filter.toLowerCase();
  return fullList.filter((contact) =>
    contact.name.toLowerCase().includes(filterValueNorm)
  );
}

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filteredContactList(items, filter)
})
const mapDispatchTooProps = dispatch => ({
  onClick: (id) => dispatch(ations.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchTooProps)(ListContacts)