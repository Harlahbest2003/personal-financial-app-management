// src/components/Dashboard/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Dashboard.css'; // Import custom CSS for styling

const Dashboard = () => {
  return (
    <Container>
      <Row className="mt-4">
        {/* Expense Tracking */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Expense Tracking</Card.Title>
              <Card.Text>
                Track and categorize your expenses (e.g., food, transport).
              </Card.Text>
              {/* Include component or link to Expense Tracker */}
            </Card.Body>
          </Card>
        </Col>

        {/* Income Tracking */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Income Tracking</Card.Title>
              <Card.Text>
                Log your income sources and amounts.
              </Card.Text>
              {/* Include component or link to Income Tracker */}
            </Card.Body>
          </Card>
        </Col>

        {/* Budgeting */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Budgeting</Card.Title>
              <Card.Text>
                Set up and track your monthly or weekly budgets.
              </Card.Text>
              {/* Include component or link to Budgeting */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Financial Goals */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Financial Goals</Card.Title>
              <Card.Text>
                Set and track your financial goals (e.g., saving for vacation).
              </Card.Text>
              {/* Include component or link to Financial Goals */}
            </Card.Body>
          </Card>
        </Col>

        {/* Reports and Analytics */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Reports and Analytics</Card.Title>
              <Card.Text>
                Generate visual reports and charts to analyze your financial health.
              </Card.Text>
              {/* Include component or link to Reports */}
            </Card.Body>
          </Card>
        </Col>

        {/* Recurring Transactions */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Recurring Transactions</Card.Title>
              <Card.Text>
                Manage recurring expenses and income (e.g., subscriptions).
              </Card.Text>
              {/* Include component or link to Recurring Transactions */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        {/* Notifications and Alerts */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Notifications and Alerts</Card.Title>
              <Card.Text>
                Get reminders for upcoming bills or when nearing budget limits.
              </Card.Text>
              {/* Include component or link to Notifications */}
            </Card.Body>
          </Card>
        </Col>

        {/* Multi-Currency Support */}
        <Col md={4} className="mb-4">
          <Card className="feature-card">
            <Card.Body>
              <Card.Title>Multi-Currency Support</Card.Title>
              <Card.Text>
                Manage finances in multiple currencies.
              </Card.Text>
              {/* Include component or link to Multi-Currency Support */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
