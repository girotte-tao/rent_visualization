import React, { useState } from 'react';

const HighlightBlocks = ({ onChange, data, selectedBlock }) => {
  // const [activeBlock, setActiveBlock] = useState(selectedBlock);
  const [hoverBlock, setHoverBlock] = useState(null);

  const handleBlockClick = (blockNumber) => {
    // setActiveBlock(blockNumber);
    onChange(blockNumber);
  };

  const handleMouseEnter = (blockNumber) => {
    setHoverBlock(blockNumber);
  };

  const handleMouseLeave = () => {
    setHoverBlock(null);
  };

  const blockStyle = (blockNumber) => ({
    display: 'flex',
    flexDirection: 'column', // Arrange items in a column
    alignItems: 'center',  // Vertically center
    justifyContent: 'center',  // Horizontally center
    width: '100%',
    height: '24%',
    marginBottom: blockNumber !== 4 ? '1%' : '0',
    backgroundColor: selectedBlock === blockNumber ? 'lightblue' : (hoverBlock === blockNumber ? 'lightgreen' : 'gray'),
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  });

  const splitTextIntoLines = (text) => {
    return text.split(' ').map((line, index) => (
      <div key={index}>{line}</div>
    ));
  };

  return (
    <div style={{ height: '100vh', paddingTop: '1.6%' }}>
      {data.map((item, index) => (
        <div
          key={index}
          style={blockStyle(index + 1)}
          onClick={() => handleBlockClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        >
          {splitTextIntoLines(item)}
        </div>
      ))}
    </div>
  );
};

export default HighlightBlocks;
