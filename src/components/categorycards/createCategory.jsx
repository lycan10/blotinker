import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BASE_URL } from '../../environment';
import { useCreate } from '../hooks/useCreate';

function CreateCategory({ showModal, handleClose }) {
    const { mutate: save, isLoading, isError: isError, error } = useCreate();
    const [name, setName] = useState('');
    
    const handleSubmit = () => {
        if (name) {
          save(
            { name, 'endpoint':'/category' },
            {
              onSuccess: (data) => {
                handleClose();
              },
            }
          );
        }
      };
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add new category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='p-4'>
                    <Form.Group controlId="formName">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter category name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{handleSubmit();}}>
            {isLoading ? 'Saving...': "Save"} 
            </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CreateCategory;
