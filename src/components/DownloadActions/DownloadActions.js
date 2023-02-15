import { DownloadActionsSC } from './DownloadActions.styles';

export const DownloadActions = ({ ...props }) => {
  return (
    <DownloadActionsSC
      label="Download as"
      icon={'download'}
      actions={['Document', 'Image', 'PDF', 'HTML']}
      {...props}
    />
  );
};
