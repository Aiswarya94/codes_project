const [cityAdd, setCityAdd] = useState(false);
const [cityView, setCityView] = useState(false);
const [countryAdd, setCountryAdd] = useState(false);
const [countryView, setCountryView] = useState(false);
const [districtAdd, setDistrictAdd] = useState(false);
const [districtView, setDistrictView] = useState(false);
const [finyearsAdd, setFinyearsAdd] = useState(false);
const [finyearsView, setFinyearsView] = useState(false);
const [matpropertiesAdd, setMatpropertiesAdd] = useState(false);
const [matpropertiesView, setMatpropertiesView] = useState(false);
const [productTypeAdd, setProducttypeAdd] = useState(false);
const [producttypeView, setProducttypeView] = useState(false);
const [productnameAdd, setProductnameAdd] = useState(false);
const [productnameView, setProductnameView] = useState(false);
const [regionAdd, setRegionAdd] = useState(false);
const [regionView, setRegionView] = useState(false);
const [statesAdd, setStatesAdd] = useState(false);
const [statesView, setStatesView] = useState(false);
const [supplytypeAdd, setSupplytypeAdd] = useState(false);
const [supplytypeView, setSupplytypeView] = useState(false);
const [unitsAdd, setUnitsAdd] = useState(false);
const [unitsView, setUnitsView] = useState(false);

const cityAddClick = () => {
  setCityAdd(true);
};
const cityViewClick = () => {
  setCityView(true);
};
const countryAddClick = () => {
    setCountryAdd(true);
  };
  const countryViewClick = () => {
    setCountryView(true);
  };
  const districtAddClick = () => {
    setDistrictAdd(true);
  };
  const districtViewClick = () => {
    setDistrictView(true);
  };
  const finyearsAddClick = () => {
    setFinyearsAdd(true);
  };
  const finyearsViewClick = () => {
    setFinyearsView(true);
  };
  const matpropertiesViewClick = () => {
    setMatpropertiesView(true);
  };
  const matpropertiesAddClick = () => {
    setMatpropertiesAdd(true);
  };
  const producttypeViewClick = () => {
    setProducttypeView(true);
  };
  const producttypeAddClick = () => {
    setProducttypeAdd(true);
  };
  const productnameViewClick = () => {
    setProductnameView(true);
  };
  const productnameAddClick = () => {
    setProductnameAdd(true);
  };
  const regionViewClick = () => {
    setRegionView(true);
  };
  const regionAddClick = () => {
    setRegionAdd(true);
  };
  const statesViewClick = () => {
    setStatesView(true);
  };
  const statesAddClick = () => {
    setStatesAdd(true);
  };
  const supplytypeViewClick = () => {
    setSupplytypeView(true);
  };
  const supplytypeAddClick = () => {
    setSupplytypeAdd(true);
  };
  const unitsViewClick = () => {
    setUnitsView(true);
  };
  const unitsAddClick = () => {
    setUnitsAdd(true);
  };
  

const handleCloseAddModal = () => {
  setCityzAdd(false);
};
const handleCloseViewModal = () => {
  setCityView(false);
};
const handleCloseAddModal = () => {
    setCountryAdd(false);
  };
  const handleCloseViewModal = () => {
    setCountryView(false);
  };
  const handleCloseAddModal = () => {
    setDistrictAdd(false);
  };
  const handleCloseViewModal = () => {
    setDistrictView(false);
  };
  const handleCloseAddModal = () => {
    setFinyearsAdd(false);
  };
  const handleCloseViewModal = () => {
    setFinyearsView(false);
  };
  const handleCloseAddModal = () => {
    setMatpropertiesAdd(false);
  };
  const handleCloseViewModal = () => {
    setMatpropertiesView(false);
  };
  const handleCloseAddModal = () => {
    setProducttypeAdd(false);
  };
  const handleCloseViewModal = () => {
    setProducttypeView(false);
  };
  const handleCloseAddModal = () => {
    setProductnameAdd(false);
  };
  const handleCloseViewModal = () => {
    setProductnameView(false);
  };
  const handleCloseAddModal = () => {
    setRegionAdd(false);
  };
  const handleCloseViewModal = () => {
    setRegionView(false);
  };
  const handleCloseAddModal = () => {
    setStatesAdd(false);
  };
  const handleCloseViewModal = () => {
    setStatesView(false);
  };
  const handleCloseAddModal = () => {
    setSupplytypeAdd(false);
  };
  const handleCloseViewModal = () => {
    setSupplytypeView(false);
  };
  const handleCloseAddModal = () => {
    setUnitsAdd(false);
  };
  const handleCloseViewModal = () => {
    setUnitsView(false);
  };
                  
  

<div className="row">
  {/* <!-- Earnings (Monthly) Card Example --> */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
              City
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">10</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={cityAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={cityViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={cityAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>City</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <City />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={cityView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>City</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CityData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
              Country
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={countryAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={countryViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={countryAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Country</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Reason />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={countryView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Country</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReasonData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
              District
            </div>
            <div class="row no-gutters align-items-center">
              <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>

      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={districtAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={districtViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={districtAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>District</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Activity />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={districtView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>District</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ActivityData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-warning shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
              Finyears
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-comments fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={finyearsAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={finyearsViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={finyearsAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Finyears</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Delaycause />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={delayView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Finyears</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <DelayData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</div>;
<div className="row">
  {/* <!-- Earnings (Monthly) Card Example --> */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
              Matproperties
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">10</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button
          className="btn btn-primary mr-2"
          onClick={matpropertiesAddClick}
        >
          Add
        </button>
        <button className="btn btn-secondary" onClick={matpropertiesViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={matpropertiesAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Matproperties</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <City />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={MatpropertiesView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>Matproperties</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <CityData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
              Product Type
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={producttypeAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={producttypeViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={producttypeAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Producttype</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Reason />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={countryView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Producttype</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReasonData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
              Productname
            </div>
            <div class="row no-gutters align-items-center">
              <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>

      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={productnameAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={productnameViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={productnameAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Productname</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Activity />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={productnametView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Productname</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ActivityData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-warning shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
              Region
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-comments fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={regionAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={regionViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={regionAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Region</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Delaycause />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={regionView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Finyears</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <DelayData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
</div>;
<div className="row">
  {/* <!-- Earnings (Monthly) Card Example --> */}
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card border-left-primary shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
            States
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">10</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-calendar fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={statesAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={statesViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={statesAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>States</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LiningZone />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={statesView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header closeButton>
      <Modal.Title>States</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <LineData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-success shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
              
SupplyType
            </div>
            <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
          </div>
          <div class="col-auto">
            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={supplytypeAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={supplytypeViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={supplytypeAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Supply Type</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Reason />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={reasonView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Supply Type</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReasonData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-info shadow h-100 py-2">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
              Units
            </div>
            <div class="row no-gutters align-items-center">
              <div class="h5 mb-0 font-weight-bold text-gray-800">6</div>
            </div>
          </div>
          <div class="col-auto">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </div>
      </div>

      <div className="card-footer d-flex justify-content-end">
        <button className="btn btn-primary mr-2" onClick={unitsAddClick}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={unitsViewClick}>
          View
        </button>
      </div>
    </div>
  </div>

  {/* Add Modal */}
  <Modal show={unitsAdd} onHide={handleCloseAddModal} size="xl">
    <Modal.Header>
      <Modal.Title>Units</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Activity />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseAddModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  {/* View Modal */}
  <Modal show={UnitsView} onHide={handleCloseViewModal} size="xl">
    <Modal.Header>
      <Modal.Title>Units</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ActivityData />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseViewModal}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  