import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description} />
      ))}
    </ul>
  );
}

export default MeetupList;

/* Альтернативная реализация:
Можно было передать в <MeetupItem /> внутри стрелочной ф-ции `meetup={meetup}, тогда нужно было бы использовать деструтуризация внутри MeetupItem компонента` */