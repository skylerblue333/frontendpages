import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Bold, Italic, Link2, Image, Code, List, Quote, Eye, Save,
  Send, ChevronLeft, Globe, Lock, Star, Hash, X, Plus,
  AlignLeft, Heading1, Heading2, Minus
} from "lucide-react";

export default function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [visibility, setVisibility] = useState<"public" | "subscribers" | "private">("public");
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("Local editor only. No draft or publication provider is connected.");

  const addTag = () => {
    const t = tagInput.trim().toLowerCase().replace(/\s+/g, "-");
    if (t && !tags.includes(t) && tags.length < 5) {
      setTags(prev => [...prev, t]);
      setTagInput("");
    }
  };

  const handleSave = () => {
    setSaving(true);
    setSaved(false);
    setStatus("Draft saving is unavailable until authenticated persistence is connected. No external write was started.");
    window.setTimeout(() => setSaving(false), 250);
  };

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur px-4 py-2.5 flex items-center gap-3">
        <Link href="/creator-onboarding">
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            <ChevronLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <Badge variant="outline" className="text-xs font-mono">Article</Badge>
          {saved && <span className="text-xs text-purple-400">Saved locally ✓</span>}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-1" onClick={() => setPreview(p => !p)}>
            <Eye className="h-4 w-4" />{preview ? "Edit" : "Preview"}
          </Button>
          <Button variant="outline" size="sm" className="gap-1" onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4" />{saving ? "Saving..." : "Save Draft"}
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground gap-1" disabled={!title || !content} onClick={() => setStatus("Publication is unavailable until authenticated content, moderation, visibility, and provider workflows are connected.")}>
            <Send className="h-4 w-4" />Publish unavailable
          </Button>
        </div>
      </div>

      <div className="border-b border-amber-300/15 bg-amber-300/[0.05] px-4 py-3 text-center text-xs text-amber-100/80" aria-live="polite">{status}</div>
      <div className="flex flex-1">
        {/* Editor */}
        <div className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
          {!preview ? (
            <>
              {/* Title */}
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Article title..."
                className="w-full text-3xl md:text-4xl font-bold bg-transparent border-none outline-none placeholder:text-muted-foreground/40 mb-4 resize-none"
              />

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 p-2 rounded-xl border border-border/50 bg-card/30 mb-4">
                {[
                  { icon: Heading1, label: "H1" }, { icon: Heading2, label: "H2" },
                  { icon: Bold, label: "Bold" }, { icon: Italic, label: "Italic" },
                  { icon: Link2, label: "Link" }, { icon: Image, label: "Image" },
                  { icon: Code, label: "Code" }, { icon: List, label: "List" },
                  { icon: Quote, label: "Quote" }, { icon: Minus, label: "Divider" },
                ].map(({ icon: Icon, label }) => (
                  <button key={label} title={label} className="p-1.5 rounded-lg hover:bg-card/80 text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Content */}
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Start writing your article... Use the toolbar above to format your content."
                className="w-full min-h-[400px] bg-transparent border-none outline-none text-base leading-relaxed placeholder:text-muted-foreground/40 resize-none"
              />

              <div className="text-xs text-muted-foreground mt-2">{wordCount} words · {readTime} min read</div>
            </>
          ) : (
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold mb-4">{title || "Untitled Article"}</h1>
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{content || "Nothing written yet."}</div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:flex w-72 border-l border-border/50 flex-col p-5 gap-5">
          {/* Visibility */}
          <div>
            <p className="text-sm font-semibold mb-2">Visibility</p>
            <div className="space-y-2">
              {([
                { value: "public", label: "Public", desc: "Anyone can read", icon: Globe, color: "text-purple-400" },
                { value: "subscribers", label: "Subscribers Only", desc: "Paying fans only", icon: Star, color: "text-yellow-400" },
                { value: "private", label: "Private", desc: "Only you", icon: Lock, color: "text-muted-foreground" },
              ] as const).map(v => (
                <button key={v.value} onClick={() => setVisibility(v.value)} className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${visibility === v.value ? "border-primary/50 bg-primary/10" : "border-border/50 hover:border-border"}`}>
                  <v.icon className={`h-4 w-4 ${v.color} shrink-0`} />
                  <div><p className="text-xs font-medium">{v.label}</p><p className="text-xs text-muted-foreground">{v.desc}</p></div>
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <p className="text-sm font-semibold mb-2">Tags <span className="text-muted-foreground font-normal">({tags.length}/5)</span></p>
            <div className="flex gap-2 mb-2">
              <Input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addTag()} placeholder="Add tag..." className="h-8 text-xs" />
              <Button size="sm" variant="outline" onClick={addTag} className="h-8 px-2"><Plus className="h-3.5 w-3.5" /></Button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map(t => (
                <span key={t} className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary">
                  <Hash className="h-2.5 w-2.5" />{t}
                  <button onClick={() => setTags(prev => prev.filter(x => x !== t))}><X className="h-2.5 w-2.5" /></button>
                </span>
              ))}
            </div>
          </div>

          {/* Monetization boundary */}
          <div className="rounded-xl border border-amber-300/20 bg-amber-300/[0.05] p-4">
            <p className="text-sm font-semibold text-amber-200 mb-1">Monetization boundary</p>
            <p className="text-xs leading-5 text-muted-foreground">Tips, subscriber access, revenue share, token rewards, and payout estimates are not shown until a verified ledger, identity, entitlement, payment, tax, and settlement provider is connected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
