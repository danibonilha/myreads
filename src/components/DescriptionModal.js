import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal } from 'semantic-ui-react';


const DescriptionModal = ({ book, isOpen, children }) => (
	<Modal open={isOpen} >
		<Modal.Header>{book.title}</Modal.Header>
		<Modal.Content>{book.description}</Modal.Content>
		<Modal.Actions>
			{children}
		</Modal.Actions>
	</Modal>
);

DescriptionModal.propTypes = {
	book: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired
};

export { DescriptionModal };
