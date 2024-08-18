/* eslint-disable react/prop-types */
import { Modal, Button, Flex, Box } from "@mantine/core";
import { lowerFirst } from "@mantine/hooks";

const ConfirmLanguageChangeModal = ({
  pendingLanguage,
  setModalOpen,
	onSelect,
	modalOpen
}) => {
  const confirmLanguageChange = () => {
    onSelect(lowerFirst(pendingLanguage).split(",")[0]);
    setModalOpen(false);
  };

  return (
    <Modal
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
      title="Warning"
    >
      <Flex direction="column" gap="lg">
        <Box>
          <p>
            Changing the programming language will clear all code currently in
            the editor.
          </p>
          <p>Are you sure you want to proceed?</p>
        </Box>
        <Flex justify="center" gap="xl">
          <Button onClick={confirmLanguageChange} bg="#333">
            Confirm
          </Button>
          <Button onClick={() => setModalOpen(false)} color="#666">
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ConfirmLanguageChangeModal;
