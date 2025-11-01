import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  Input 
} from '../src/index'

/**
 * Example: Agent Dashboard Component
 * 
 * This example demonstrates how to use the xyzen-ui components
 * to build an intelligent agent web frontend.
 */
export function AgentDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">AI Agent Dashboard</h1>
      
      {/* Agent Status Card */}
      <Card>
        <CardHeader>
          <CardTitle>Agent Status</CardTitle>
          <CardDescription>Current state of your AI agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Status:</span>
              <span className="text-sm text-green-600">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tasks Completed:</span>
              <span className="text-sm">142</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="sm">View Details</Button>
        </CardFooter>
      </Card>

      {/* Agent Input Card */}
      <Card>
        <CardHeader>
          <CardTitle>Send Command</CardTitle>
          <CardDescription>Enter a command for your agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              type="text" 
              placeholder="Type your command here..." 
            />
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Send</Button>
          <Button variant="outline">Clear</Button>
        </CardFooter>
      </Card>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="default">Start Agent</Button>
        <Button variant="secondary">Pause Agent</Button>
        <Button variant="destructive">Stop Agent</Button>
        <Button variant="ghost">Settings</Button>
      </div>
    </div>
  )
}

/**
 * Example: Simple Button Showcase
 */
export function ButtonShowcase() {
  return (
    <div className="space-y-4 p-6">
      <h2 className="text-2xl font-bold">Button Variants</h2>
      <div className="flex gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      
      <h2 className="text-2xl font-bold">Button Sizes</h2>
      <div className="flex items-center gap-2">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  )
}
