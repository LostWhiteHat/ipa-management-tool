import type { Route } from "../files/+types";
import { Bell, Plus, Trash2 } from "lucide-react";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Button } from "components/ui/button";
import { Checkbox } from "components/ui/checkbox";
import { useState } from "react";
import { title } from "node:process";
import { Label } from "components/ui/label";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard" },
  ];
}

export default function Dashboard() {
  const [notes, setNotes] = useState<any>([]);
  const [reminderEnabled, setReminderEnabled] = useState(false);

  return (
    <>
      <div className="mb-8 glass-strong nebula-glow rounded-3xl p-6 animate-in fade-in slide-in-from-top-4 duration-500">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-nebula-purple to-nebula-blue">
            <Bell className="h-5 w-5 text-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="mb-1 text-xl font-bold text-foreground">
              {"Health Announcement"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum....
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <h3 className="mb-4 text-xl font-bold text-foreground">Notes</h3>

          {/* Add Note Form */}
          <div className="mb-4 space-y-3 rounded-xl glass-strong p-4">
            <Input
              placeholder="Note title..."
              className="glass-card border-white/20 bg-white/5 text-foreground placeholder:text-muted-foreground focus:border-nebula-purple focus:ring-nebula-purple/20"
            />
            <Textarea
              placeholder="Write your note..."
              rows={3}
              className="glass-card border-white/20 bg-white/5 text-foreground placeholder:text-muted-foreground focus:border-nebula-purple focus:ring-nebula-purple/20"
            />

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="reminder"
                  checked={reminderEnabled}
                  onCheckedChange={(checked) =>
                    setReminderEnabled(checked as boolean)
                  }
                  className="border-white/20 data-[state=checked]:bg-nebula-purple data-[state=checked]:border-nebula-purple"
                />
                <Label
                  htmlFor="reminder"
                  className="cursor-pointer font-normal text-muted-foreground text-sm"
                >
                  Set reminder
                </Label>
              </div>

              {reminderEnabled && (
                <div className="grid grid-cols-2 gap-2 pl-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-1">
                    <Label
                      htmlFor="reminder-date"
                      className="text-xs text-muted-foreground"
                    >
                      Date
                    </Label>
                    <Input
                      id="reminder-date"
                      type="date"
                      className="glass-card border-white/20 bg-white/5 text-foreground text-sm focus:border-nebula-purple focus:ring-nebula-purple/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor="reminder-time"
                      className="text-xs text-muted-foreground"
                    >
                      Time
                    </Label>
                    <Input
                      id="reminder-time"
                      type="time"
                      className="glass-card border-white/20 bg-white/5 text-foreground text-sm focus:border-nebula-purple focus:ring-nebula-purple/20"
                    />
                  </div>
                </div>
              )}
            </div>

            <Button
              className="w-full bg-linear-to-r from-violet-600 to-blue-600 hover:opacity-90"
              size="sm"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Note
            </Button>
          </div>

          {/* Saved Notes List */}
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {notes.map((note: any) => (
              <div key={note.id} className="rounded-xl glass-strong p-4 group">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground mb-1 truncate">
                      {note.title}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {note.text}
                    </div>
                    {note.reminder && (
                      <div className="flex items-center gap-1 mb-1">
                        <Bell className="h-3 w-3 text-nebula-purple" />
                        <span className="text-xs text-nebula-purple">
                          {note.reminder.date} at {note.reminder.time}
                        </span>
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground/60">
                      {note.timestamp}
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-500/20 rounded">
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h3 className="mb-4 text-xl font-bold text-foreground">
            Today's Tasks
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-nebula-purple uppercase tracking-wide">
              Priority
            </h4>
            <div className="space-y-2">
              <div className="rounded-xl glass-strong p-3 border-l-2 border-red-500">
                <div className="text-sm font-medium text-foreground">
                  Fix authentication bug
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 2:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3 border-l-2 border-orange-500">
                <div className="text-sm font-medium text-foreground">
                  Client meeting preparation
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 4:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3 border-l-2 border-yellow-500">
                <div className="text-sm font-medium text-foreground">
                  Review pull requests
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 5:30 PM
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              All Tasks
            </h4>
            <div className="space-y-2">
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Update documentation
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 6:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Code refactoring
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: End of day
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Team sync notes
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: Tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h3 className="mb-4 text-xl font-bold text-foreground">
            Tomorrow's Tasks
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-nebula-purple uppercase tracking-wide">
              Priority
            </h4>
            <div className="space-y-2">
              <div className="rounded-xl glass-strong p-3 border-l-2 border-red-500">
                <div className="text-sm font-medium text-foreground">
                  Fix authentication bug
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 2:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3 border-l-2 border-orange-500">
                <div className="text-sm font-medium text-foreground">
                  Client meeting preparation
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 4:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3 border-l-2 border-yellow-500">
                <div className="text-sm font-medium text-foreground">
                  Review pull requests
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 5:30 PM
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              All Tasks
            </h4>
            <div className="space-y-2">
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Update documentation
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: 6:00 PM
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Code refactoring
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: End of day
                </div>
              </div>
              <div className="rounded-xl glass-strong p-3">
                <div className="text-sm font-medium text-foreground">
                  Team sync notes
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Due: Tomorrow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
