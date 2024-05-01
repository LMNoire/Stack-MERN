import React from "react";
import PropTypes from "prop-types";
import { MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div>
      <div className="">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>

        <MdOutlinePushPin className="" onClick={onPinNote} />
      </div>

      <p className="">{content?.slice(0, 60)}</p>
    </div>
  );
};

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  isPinned: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onPinNote: PropTypes.func.isRequired,
};

export default NoteCard;