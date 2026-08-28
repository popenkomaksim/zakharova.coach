import PropTypes from "prop-types";
import { Col, Row, Divider, List, Tag } from "antd";

const EventsAndAchievements = ({ events }) => (
  <Row justify="center">
    <Col xs="24" s="24" lg="12" style={{ padding: "0 2em" }}>
      <Divider titlePlacement="left">Майбутні події:</Divider>
      <List size="small">
        {events.map((event) => (
          <List.Item key={event.name}>
            <Tag>{event.tag}</Tag> {event.name} <br />
            {event.dateStart} {event.dateEnd}
          </List.Item>
        ))}
      </List>
      <Divider />
    </Col>

    <Col xs="24" s="24" lg="12" style={{ padding: "0 2em" }}>
      <Divider titlePlacement="left">Спортивні досягнення:</Divider>
      <List size="small">
        <List.Item>
          <Tag>Іспанія 2019</Tag>
          <Tag>США 2023</Tag>чемпіонка Чемпіонатів Світу з рогейну
        </List.Item>
        <List.Item>
          <Tag>2017</Tag>чемпіонка Чемпіонату Європи з рогейну
        </List.Item>
        <List.Item>
          <Tag>2023</Tag>учасниця чемпіонатіу Світу зі скі-альпінізму
        </List.Item>
        <List.Item>
          <Tag>Франція 2022</Tag>призерка Mountains Hard Ultra Trail 35 км
        </List.Item>
        <List.Item>
          <Tag>Португалія 2019</Tag>призерка Madeira Island Ultra Trail 85 км
        </List.Item>
        <List.Item>
          <Tag>Україна 2018, 2019, 2020</Tag>переможниця Chornohora Sky Marathon
          60 км
        </List.Item>
        <List.Item>
          <Tag>Україна 2018</Tag>переможниця в абсолюті «Bojko Trail» 46 км
        </List.Item>
        <List.Item>майстер спорту міжнародного класу з орієнтування</List.Item>
        <List.Item>майстер спорту України з легкої атлетики</List.Item>
      </List>
    </Col>
  </Row>
);

EventsAndAchievements.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      tag: PropTypes.string,
      dateStart: PropTypes.string,
      dateEnd: PropTypes.string,
    })
  ).isRequired,
};

export default EventsAndAchievements;
