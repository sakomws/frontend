import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {DragSource} from 'react-dnd';
import classNames from 'classnames';
import defaultLogo from '../../assets/icons/JobHax-logo-black.svg';
import linkedInLogo from '../../assets/icons/linkedInLogo.png';
import hiredComLogo from '../../assets/icons/hiredComLogo.png';
import indeedLogo from '../../assets/icons/indeedLogo.png';
import vetteryLogo from '../../assets/icons/vetteryLogo.jpg';
import CardModal from '../CardModal/CardModal.jsx';

import './style.scss'

const cardSpec = {
  beginDrag(props) {
    return props.card;
  },

  endDrag(props, monitor) {
    if (monitor.didDrop()) {
      return props.updateApplications(props.card, props.columnName, monitor.getDropResult().name);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Card extends PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }));
  }

  sourceLogoSelector(source) {
    if (source=='Hired.com') {
      console.log(this.props.source);
      return(
        <img src={hiredComLogo}></img>
      )
    }
    if (source=='LinkedIn') {
      console.log(this.props.source);
      return(
        <img src={linkedInLogo}></img>
      )
    }
    if (source=='Indeed') {
      console.log(this.props.source);
      return(
        <img src={indeedLogo}></img>
      )
    } 
    if (source=='Vettery') {
      console.log(this.props.source);
      return(
        <img src={vetteryLogo}></img>
      )
    }
  }

  renderCard() {
    const {
      card: {
        companyLogo,
        company,
        jobTitle,
        isRejected,
        applyDate,
        source,
        token,
        columnName,
        deleteJobFromList,
        moveToRejected,
        updateApplications,
        icon,
        id
      },
      isDragging
    } = this.props;

    const {showModal} = this.state;

    const cardClass = classNames({
      'card-container': true,
      'rejected-cards': isRejected,
      '--is_dragging': isDragging
    });

    return (
      <div>
        {
          showModal &&
          <CardModal
            token = {token}
            columnName={columnName}
            toggleModal={this.toggleModal}
            deleteJobFromList = {deleteJobFromList}
            moveToRejected = {moveToRejected}
            updateApplications = {updateApplications}
            icon = {icon}
            id={id}
            {...this.props}
          />
        }
        <div className={cardClass} onClick={this.toggleModal}>
          <div className="card-company-icon">
            <img src={companyLogo || defaultLogo}/>
          </div>
          <div className="card-company-info">
            <div id="company" className="card-company-name">
              {company}
            </div>
            <div id="jobTitle" className="card-job-position">
              {jobTitle}
            </div>
          </div>
          <div className="card-job-details">
            {this.sourceLogoSelector(source)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      card: {
        isRejected
      },
      connectDragSource,
    } = this.props;

    if (isRejected) {
      return this.renderCard();
    }
    return connectDragSource(
      this.renderCard()
    );
  }
};

Card.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

export default DragSource('item', cardSpec, collect)(Card);
