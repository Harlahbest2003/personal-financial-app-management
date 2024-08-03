import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-4">
        {/* Expense Tracking */}
        <Col md={4} className="mb-4">
          <Link to="/expense-tracking" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Expense Tracking</Card.Title>
                <Card.Text>
                  Track and categorize your expenses (e.g., food, transport).
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Income Tracking */}
        <Col md={4} className="mb-4">
          <Link to="/income-tracking" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Income Tracking</Card.Title>
                <Card.Text>
                  Log your income sources and amounts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Budgeting */}
        <Col md={4} className="mb-4">
          <Link to="/budgeting" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Budgeting</Card.Title>
                <Card.Text>
                  Set up and track your monthly or weekly budgets.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Financial Goals */}
        <Col md={4} className="mb-4">
          <Link to="/financial-goals" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Financial Goals</Card.Title>
                <Card.Text>
                  Set and track your financial goals (e.g., saving for vacation).
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Reports and Analytics */}
        <Col md={4} className="mb-4">
          <Link to="/reports" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Reports and Analytics</Card.Title>
                <Card.Text>
                  Generate visual reports and charts to analyze your financial health.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Recurring Transactions */}
        <Col md={4} className="mb-4">
          <Link to="/recurring-transactions" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Recurring Transactions</Card.Title>
                <Card.Text>
                  Manage recurring expenses and income (e.g., subscriptions).
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Notifications and Alerts */}
        <Col md={4} className="mb-4">
          <Link to="/notifications" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Notifications and Alerts</Card.Title>
                <Card.Text>
                  Get reminders for upcoming bills or when nearing budget limits.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        {/* Multi-Currency Support */}
        <Col md={4} className="mb-4">
          <Link to="/multi-currency" style={{ textDecoration: 'none' }}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Multi-Currency Support</Card.Title>
                <Card.Text>
                  Manage finances in multiple currencies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
