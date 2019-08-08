import _ from "lodash";
import React from "react";
import PT from "prop-types";
import IPT from "react-immutable-proptypes";
import { fromJS } from "immutable";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

import { rem } from "../../style/whitespace";

/**
 * Tile URL
 * @type {string}
 */
const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

/**
 * @type {number}
 */
const DEFAULT_ZOOM = 5;

/**
 * @type {number}
 */
const MAX_ZOOM = 8;

/**
 * @type {{lat: number, lng: number}}
 */
const CENTER_OF_UNIVERSE = {
  lat: 40.8136,
  lng: -98.7026
};

/**
 * Add a minimum height to the map.
 */
const StyledMap = styled(Map)`
  min-height: ${rem(400)};
  width: 100%;
`;

/**
 * Map with markers
 * @type {ReactComponent}
 */
class Markers extends React.Component {

  /**
   * @memberOf Markers
   * @type {{center: *, zoom: shim, data: *, clustered: shim}}
   */
  static propTypes = {
    /** the center of the universe */
    center: IPT.map,
    /** map zoom */
    zoom: PT.number,
    /** marker data */
    data: IPT.list,
    /** split markers into clusters */
    clustered: PT.bool
  };

  /**
   * @memberOf Markers
   * @type {{center: any, zoom: number, clustered: boolean}}
   */
  static defaultProps = {
    center: fromJS(CENTER_OF_UNIVERSE),
    zoom: DEFAULT_ZOOM,
    clustered: true
  };

  renderMarker (marker) {
    const { id, farmName, geoCoords } = marker.toJS();
    const [lat, lng] = geoCoords.split(",");

    const position = _.mapValues({ lat, lng }, Number);

    return (
      <Marker key={id} position={position}>
        <Tooltip>
          <span>{farmName}</span>
        </Tooltip>
      </Marker>
    );
  }

  render () {
    const { center, zoom, data, clustered } = this.props;

    /**
     * Rendered markers
     */
    const markers = data ? data.map(this.renderMarker) : null;

    return data && (
      <StyledMap center={center.toJS()} maxZoom={MAX_ZOOM} zoom={zoom}>
        <TileLayer url={TILE_URL} />
        {clustered ? (
          <MarkerClusterGroup showCoverageOnHover={false}>
            {markers}
          </MarkerClusterGroup>
        ) : (
          markers
        )}
      </StyledMap>
    );
  }

}

export default Markers;